export class Stat {
  id: number;
  name: string;
  description: string;
  formElementId: number;
  options: string;
  requiredYn: string;
  exampleValue: string;
  value: string;
  date: string;
  info: string;
  comment: string;
  isPr: boolean;

  constructor(id: number, name: string, description: string, 
                formElementId: number, options: string, requiredYn: string,
                exampleValue: string, value: string, 
                date: string, info: string, comment: string, isPr: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.formElementId = formElementId;
    this.options = options;
    this.requiredYn = requiredYn;
    this.exampleValue = exampleValue;
    this.value = value;
    this.date = date;
    this.info = info;
    this.comment = comment;
    this.isPr = isPr;
  }
}
