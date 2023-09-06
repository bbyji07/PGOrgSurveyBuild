var doc = require("surveyjs-doc-generator");

doc.generateDts({ 
  entries: ["./src/entries/index.ts"],
  out: "./build/survey-creator.d.ts",
  name: "Type definition for Survey Creator library",
  paths: {
    "survey-knockout": ["./node_modules/survey-knockout/survey.ko.d.ts"]
  }    
}
);
