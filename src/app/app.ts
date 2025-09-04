import {
  Component,
} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {Project, ProjectInterface} from './components/project/project';

// import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MatMenuModule, Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected panelWidth = 0;
  protected title = 'afcwebsite';
  projects: ProjectInterface[] = [
    {
      title: 'Design Library',
      description: '“Lightweight, responsive Angular components built for' +
        ' speed, reuse, and consistency across my personal projects. Documented ' +
        'in Storybook, tested with Chromatic, and designed with accessibility ' +
        'in mind to keep development fast and reliable.',
      technologies: ['Figma', 'Angular', 'Chromatic', 'Storybook', 'NotionAI'],
      image: './assets/buttons.png',
      links: [
        {
          name: 'Notion Docs',
          url: 'https://www.notion.so/ND-Design-Library-25478bd457138011adbadb8bdcc1adcb?'
        },
        {name: 'Github', url: 'https://github.com/Natchez/Natchez-Designs-Library'},
        {name: 'Storybook', url: 'https://master--68b314858f5546541963514c.chromatic.com/?path=/docs/components-button--docs'},
        {name: 'Chromatic', url: 'https://www.chromatic.com/builds?appId=68b314858f5546541963514c'}
      ],
      app: 'wds'

    },
    {
      title: 'Work Examples',
      description:
        ' A collection of work from previous roles, including\n' +
        ' wireframes, low and high-fidelity designs, traceability\n' +
        ' documents, proofs of concepts, and more. This link is\n' +
        ' password protected, please reach out if you’d like access.',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'Node.js', 'Figma'],
      image: './assets/workexamples.png',
      links: [
        {name: 'Portfolio', url: 'https://example.com/portfolio'},
        {name: 'Github', url: 'https://github.com/example'},
        {name: 'Case Studies', url: 'https://example.com/case-studies'}
      ],
      app: 'wds'
    },
    {
      title: 'White Dot Studio',
      description:
        'A cutting-edge design and development studio specializing in custom web and mobile applications.\n' +
        'We focus on delivering lightweight, scalable, and dynamic solutions tailored to user needs.',
      technologies: ['Angular', 'TypeScript', 'TailwindCSS', 'Firebase', 'Figma'],
      image: './assets/wds.png',
      links: [
        {name: 'Website', url: 'https://whitedotstudio.com'},
        {name: 'Github', url: 'https://github.com/whitedotstudio'},
        {name: 'Dribbble', url: 'https://dribbble.com/whitedotstudio'}
      ],
      app: 'wds'
    },
    {
      title: 'Insurance Management',
      description:
        'An advanced platform streamlining insurance policy management, customer servicing, and claims processing.\n' +
        'Built with a focus on scalability, efficiency, and a seamless user experience for both agents and customers.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'AWS', 'Material Design'],
      image: './assets/insurance.png',
      links: [
        {
          name: 'Product Overview',
          url: 'https://example.com/next-insurance-management'
        },
        {name: 'Github', url: 'https://github.com/example/next-insurance'},
        {
          name: 'Documentation',
          url: 'https://example.com/docs/next-insurance'
        }
      ],
      app: 'ins'
    },
    {
      title: 'FC Cookbook',
      description:
        'A digital recipe management application designed for food enthusiasts and professional chefs.\n' +
        'Features include customizable recipe creation, meal planning tools, and integrated shopping lists.',
      technologies: ['Angular', 'TailwindCSS', 'Firebase', 'Cloud Functions', 'Figma'],
      image: './assets/fccb.png',
      links: [
        {name: 'Live Demo', url: 'https://example.com/fc-cookbook'},
        {name: 'Github', url: 'https://github.com/example/fc-cookbook'},
        {name: 'User Guide', url: 'https://example.com/docs/fc-cookbook'}
      ],
      app: 'fccb'
    }
  ];


}

