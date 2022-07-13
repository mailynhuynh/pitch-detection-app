import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Lightbulb, Play, Stop } from 'react-bootstrap-icons';
import { useStoreActions } from '../../model';
import {
  NavIcon,
  NavItem,
  NavText,
  Toggle,
} from '../side-nav/side-nav';

export function AppFrame({ children }: { children: React.ReactNode }) {
  const [running, setRunning] = React.useState(false);

  const { initializeStream, stopStream, setEnabled } = useStoreActions(
    (actions) => actions
  );

  React.useEffect(() => {
    if (running) {
      (async () => {
        await initializeStream();
        setEnabled(true);
        console.log('Stream Initialized');
      })();
    } else {
      (async () => {
        setEnabled(false);
        await stopStream();
        console.log('Stream Stopped');
      })();
    }

    return stopStream;
  }, [initializeStream, running, setEnabled, stopStream]);

  return (
    <React.Fragment>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand>Karaoke Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about"
              className={running ? 'active' : ''}
              onClick={() => {
                setRunning(!running);
              }}
            >
              {running ? (
                <React.Fragment>
                  <NavText>Browse</NavText>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavText>Sing</NavText>
                </React.Fragment>
              )}
            </Nav.Link>
            <Nav.Link href="#link">Home</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="main-container">
        <main role="main">{children}</main>
      </div>
    </React.Fragment>
  );
}
