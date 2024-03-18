interface IUpload {
  save(file: File): void;
}

class FactoryUploadAWS implements IUpload {
  save(file: File) {
    console.log("File uploaded to AWS");
  }
}

class FactoryUploadAzure implements IUpload {
  save(file: File) {
    console.log("File uploaded to Azure");
  }
}

class FactoryUploadGCP implements IUpload {
  save(file: File) {
    console.log("File uploaded to GCP");
  }
}

class FactoryUploadDO implements IUpload {
  save(file: File) {
    console.log("File uploaded to DO");
  }
}

type TCLOUD = "AWS" | "AZURE" | "GCP" | "DO";

enum CloudEnum {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  DO = "DO",
}

const factories: Record<TCLOUD, { new (): IUpload }> = {
  AWS: FactoryUploadAWS,
  AZURE: FactoryUploadAzure,
  GCP: FactoryUploadGCP,
  DO: FactoryUploadDO,
};

function SelectFactoryUpload(type: CloudEnum) {
  return new factories[type]();
}

/*const factories:Record<TCLOUD, IUpload> = {
    AWS: new FactoryUploadAWS(),
    AZURE: new FactoryUploadAzure(),
    GCP: new FactoryUploadGCP(),
    DO: new FactoryUploadDO()
}

function SelectFactoryUpload(type: CloudEnum) {
    return factories[type]
}*/

/*function SelectFactoryUpload(type: CloudEnum) {
    if(type===CloudEnum.AWS) return new FactoryUploadAWS()
    if(type===CloudEnum.AZURE) return new FactoryUploadAzure()
    if(type===CloudEnum.GCP) return new FactoryUploadGCP()
    if(type===CloudEnum.DO) return new FactoryUploadDO()

    return null
}*/

/*function SelectFactoryUpload(type: TCLOUD) {
    if(type==="aws") return new FactoryUploadAWS()
    if(type==="azure") return new FactoryUploadAzure()
    if(type==="gcp") return new FactoryUploadGCP()
    if(type==="do") return new FactoryUploadDO()

    return null
}*/
/*function SelectFactoryUpload(type: number) {
    if(type===1) return new FactoryUploadAWS()
    if(type===2) return new FactoryUploadAzure()
    if(type===3) return new FactoryUploadGCP()
    if(type===4) return new FactoryUploadDO()

    return null
}*/

const file = new File(["datos"], "report.txt", { type: "text/plain" });
const factoryUpload: IUpload = SelectFactoryUpload(CloudEnum.GCP);
factoryUpload && factoryUpload.save(file);
