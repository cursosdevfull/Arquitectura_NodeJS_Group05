abstract class Upload {
  abstract saveFile(file: File): void;
  abstract newFilename: string;

  constructor() {
    this.progress();
  }

  progress() {
    console.log("upload file");
  }
}

class UploadAWS extends Upload {
  newFilename: string = new Date().getTime().toString();

  saveFile(file: File) {
    console.log("Upload file to AWS");
  }

  override progress() {
    console.log("method overrided");
  }

  getStatus() {
    console.log("Getting current status");
  }
}

const upload = new UploadAWS();
const file = new File(["datos"], "report.pdf", { type: "application/pdf" });
upload.saveFile(file);
