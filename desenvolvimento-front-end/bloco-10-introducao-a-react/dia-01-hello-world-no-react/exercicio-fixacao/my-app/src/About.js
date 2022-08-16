import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['Javascript', 'HTML', 'CSS'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <h1>Iorran Ditscheiner</h1>
        <p>Estudante de programação na Trybe</p>
        <h2>Minhas habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;