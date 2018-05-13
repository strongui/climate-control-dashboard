import * as React from 'react';
// import { NavLink } from 'react-router-dom';
import NavLink from './NavLink';

export default class SideMenu extends React.Component<{ location: Location }, any> {
  render() {
    return (
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        <NavLink location={this.props.location} to="/">
          <span className="fas fa-tachometer-alt" aria-hidden="true" />
          <span className="nav-link-text">Dashboard</span>
        </NavLink>

        <NavLink location={this.props.location} to="/lights">
          <span className="fas fa-lightbulb" aria-hidden="true" />
          <span className="nav-link-text">Lights</span>
        </NavLink>

        <NavLink location={this.props.location} to="/weather">
          <span className="fas fa-sun" aria-hidden="true" />
          <span className="nav-link-text">Weather</span>
        </NavLink>

        <NavLink location={this.props.location} to="/api">
          <span className="fas fa-clipboard-list" aria-hidden="true" />
          <span className="nav-link-text">API</span>
        </NavLink>

        <NavLink location={this.props.location} to="/someUnknown">
          <span className="fas fa-exclamation-circle" aria-hidden="true" />
          <span className="nav-link-text">Error 404</span>
        </NavLink>
      </ul>
    );
  }
}
