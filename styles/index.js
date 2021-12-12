// var fs = require("fs");
// var Handlebars = require("handlebars");
import fs from "fs";
import path from "path";
import Handlebars from "handlebars";

const COURSES_COLUMNS = 3;

const PREPEND_SUMMARY_CATEGORIES = ["work", "volunteer", "awards", "publications"];

function validateArray(arr) {
  return (
    arr !== undefined && arr !== null && arr instanceof Array && arr.length > 0
  );
}

function render(resume) {
  // Split courses into 3 columns
  if (validateArray(resume.education)) {
    resume.education.forEach(function (block) {
      if (validateArray(block.courses)) {
        const splitCourses = [];
        let columnIndex = 0;
        for (let i = 0; i < COURSES_COLUMNS; i++) {
          splitCourses.push([]);
        }
        block.courses.forEach(function (course) {
          splitCourses[columnIndex].push(course);
          columnIndex++;
          if (columnIndex >= COURSES_COLUMNS) {
            columnIndex = 0;
          }
        });
        block.courses = splitCourses;
      }
    });
  }

  PREPEND_SUMMARY_CATEGORIES.forEach(function (category) {
    if (resume[category] !== undefined) {
      resume[category].forEach(function (block) {
        if (block.highlights === undefined) {
          block.highlights = [];
        }
        if (block.summary) {
          block.highlights.unshift(block.summary);
          delete block.summary;
        }
      });
    }
  });

  const css = fs.readFileSync(`${process.cwd()}/styles/style.css`, "utf-8");
  const tpl = fs.readFileSync(`${process.cwd()}/styles/resume.hbs`, "utf-8");
  return Handlebars.compile(tpl)({
    css: css,
    resume: resume,
  });
}

export default render
