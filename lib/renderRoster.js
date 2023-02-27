const path = require("path");
const fs = require("fs");
const srcDir = path.resolve(__dirname, "../src");

// push to html by
// filtering employees if getrole = "role"
// map to render(role)

const renderRoster = (employees) => {
  const html = [];

  employees.forEach((element) => {
    if (element.getRole() === "manager") {
      html.push(renderManager(element));
    } else if (element.getRole() === "engineer") {
      html.push(renderEngineer(element));
    } else if (element.getRole() === "intern") {
      html.push(renderIntern(element));
    }
  });

  return mainRender(html.join(""));
};

// render(role)
// find "name, role, email" and define with role.getXX()
const renderManager = (manager) => {
  let template = fs.readFileSync(path.resolve(srcDir, "manager.html"), "utf8");
  template = replaceHTML(template, "{ name }", manager.getName());
  template = replaceHTML(template, "{ role }", manager.getRole());
  template = replaceHTML(template, "{ email }", manager.getEmail());
  template = replaceHTML(template, "{ id }", manager.getId());
  template = replaceHTML(
    template,
    "{ officeNumber }",
    manager.getOfficeNumber()
  );
  return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(path.resolve(srcDir, "engineer.html"), "utf8");
  template = replaceHTML(template, "{ name }", engineer.getName());
  template = replaceHTML(template, "{ role }", engineer.getRole());
  template = replaceHTML(template, "{ email }", engineer.getEmail());
  template = replaceHTML(template, "{ id }", engineer.getId());
  template = replaceHTML(template, "{ github }", engineer.getGithub());
  return template;
};

const renderIntern = (intern) => {
  let template = fs.readFileSync(path.resolve(srcDir, "intern.html"), "utf8");
  template = replaceHTML(template, "{ name }", intern.getName());
  template = replaceHTML(template, "{ role }", intern.getRole());
  template = replaceHTML(template, "{ email }", intern.getEmail());
  template = replaceHTML(template, "{ id }", intern.getId());
  template = replaceHTML(template, "{ school }", intern.getSchool());
  return template;
};

// take new template and replace html
const mainRender = (html) => {
  const template = fs.readFileSync(path.resolve(srcDir, "main.html"), "utf8");
  return replaceHTML(template, "{ roster }", html);
};
//   RegExp object is used for matching text with a pattern
const replaceHTML = (template, replaceArea, value) => {
  const pattern = new RegExp("{" + replaceArea + "}", "gm");
  return template.replace(pattern, value);
};

module.exports = renderRoster;
