export abstract class BaseVO<DataType> {
  protected _value: DataType;

  protected constructor(value: DataType) {
    this._value = value;
  }

  value(): DataType {
    return this._value;
  }
}
