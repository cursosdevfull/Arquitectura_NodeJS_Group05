class Upload {
  uploadFile(file: File) {
    //this.finish(file)
    this.progress(file);
  }

  progress(file: File) {
    console.log("file is uploading");
    this.sentNotifications(file.name);
  }

  sentNotifications(filename: string) {
    console.log(`notifications: ${filename} has been uploaded`);
  }

  /*finish(file: File) {
        console.log("File uploaded")
        return "File saved"
    }*/
}

class UploadAWS extends Upload {
  override finish(file: File) {
    // enviar una notificación al slack
    console.log("File uploaded");
    console.log("Notification send to Slack");
    return "File uploaded to AWS";
  }
}

const upload = new UploadAWS();
const file = new File(["data"], "data.txt", { type: "text/plain" });
upload.uploadFile(file);
