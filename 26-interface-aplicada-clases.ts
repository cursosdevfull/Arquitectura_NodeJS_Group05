interface IUpload {
  save(file: File): void;
}

class UploadAWS implements IUpload {
  save(file: File): void {
    this.progress(file);
  }

  private progress(file: File) {
    console.log(`File ${file.name} is uploading`);
  }
}

class UploadGCP implements IUpload {
  save(file: File) {
    this.status(file);
    this.sentNotificationSlack(file);
  }

  status(file: File) {
    console.log(`Status of file: ${file.name}`);
  }

  sentNotificationSlack(file: File) {
    console.log(`Notification: File ${file.name} uploaded`);
  }
}

class UploadFile {
  private readonly repository: IUpload;

  constructor(repository: IUpload) {
    this.repository = repository;
  }

  execute(file: File) {
    this.repository.save(file);
  }
}

const uploadAWS: IUpload = new UploadAWS();
const uploadGCP: IUpload = new UploadGCP();
const uploadFile = new UploadFile(uploadGCP);

const file = new File(["data"], "data.txt", { type: "text/plain" });
uploadFile.execute(file);
