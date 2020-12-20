import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import React from 'react';

export function About() {
    return (
        <h1> About Page
            <Outlet />

        </h1>
    )
}

export function Location() {
    return (
        <h1> Location Page</h1>
    )
}

export function CompnayHistory() {
    return (
        <h1> Company History Page</h1>
    )
}

export function NotFound() {
    var location =useLocation();
    return (
        <h1>{location.pathname} Page not found</h1>
    )
}



export function Home() {
    return (
        <div>
            <h1> Home Page</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="contact">Contacts</Link>
                <Link to="events">Events</Link>
            </nav>
        </div>
    )
}

export function Events() {
    return (
        <h1> Events Page</h1>
    )
}

export function Contact() {
    return (
        <h1> Contacts Page</h1>
    )
}