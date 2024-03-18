type TYPE_FACTORY = "CLOUD" | "ONPREMISE";
type TYPE_DESTINATION =
  | "AWS"
  | "AZURE"
  | "GCP"
  | "DO"
  | "ONPREMISE01"
  | "ONPREMISE02";
enum TYPE_FACTORY_DESTINATION {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  DO = "DO",
  ONPREMISE01 = "ONPREMISE01",
  ONPREMISE02 = "ONPREMISE02",
}

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

class FactoryUploadOnPremise01 implements IUpload {
  save(file: File) {
    console.log("File uploaded to OnPremise01");
  }
}

class FactoryUploadOnPremise02 implements IUpload {
  save(file: File) {
    console.log("File uploaded to OnPremise02");
  }
}

const abstractFactories: Record<
  TYPE_FACTORY,
  Record<string, { new (): IUpload }>
> = {
  CLOUD: {
    AWS: FactoryUploadAWS,
    AZURE: FactoryUploadAzure,
    GCP: FactoryUploadGCP,
    DO: FactoryUploadDO,
  },
  ONPREMISE: {
    ONPREMISE01: FactoryUploadOnPremise01,
    ONPREMISE02: FactoryUploadOnPremise02,
  },
};

function SelectFactoryUpload(
  cloudOrOnPremise: TYPE_FACTORY,
  destination: TYPE_DESTINATION
) {
  return new abstractFactories[cloudOrOnPremise][destination]() ?? null;
}

const file = new File(["datos"], "report.txt", { type: "text/plain" });
const factoryUpload: IUpload = SelectFactoryUpload("CLOUD", "AWS");
factoryUpload && factoryUpload.save(file);
