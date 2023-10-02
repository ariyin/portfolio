import React from 'react';
import Project from './Project';

import vroomin from '../assets/vroomin.png';
import kalbum from '../assets/kalbum.png';

const projectInfo = [
    { name: 'vroomin', date: 'august 2023', description: 'a user experience designed to help facilitate campus ridesharing', uix: true, code: false, image: vroomin},
    { name: 'kalbum', date: 'july 2023 - august 2023', description: 'an ecommerce app & website for preordering kpop albums', uix: true, code: false, image: kalbum},
    { name: 'creatorhub', date: 'june 2023 - august 2023', description: 'a platform to connect brands with content creators for ad creation', uix: true, code: false, image: kalbum},
    { name: 'kalah', date: 'may 2023 - june 2023', description: 'aka mancala; code for a game where the player’s purpose is to get as many rocks as possible in a hole, playable against ai', uix: false, code: true, image: kalbum},
    { name: 'olyverse', date: 'april 2023 - may 2023', description: 'ucla, aws, & slalom innovation challenge; a digital experience to engage with fans on all things ancillary to the LA28 games', uix: true, code: false, image: kalbum},
    { name: 'loocator', date: 'april 2023', description: 'an app designed to help you locate toilets close to you in your darkest hour', uix: true, code: true, image: kalbum},
    { name: 'nam-cap', date: 'may 2022', description: 'pac-man but in reverse, where the player chooses to be a ghost and chases pac-man', uix: true, code: true, image: kalbum},

]

function Projects() {
    return (
        <div className = "box">
            <h1> projects </h1> 
            <div id = "project-flex">
                {projectInfo.map((projects) => (
                    <a href={'/' + projects.name}> <Project name = {projects.name} date = {projects.date} description = {projects.description} uix = {projects.uix} code = {projects.code} image = {projects.image} /> </a>
                ))}
            </div>
        </div>
    )
}

export default Projects;