export interface IXMLEntity {
  time: string[];
  url: string[];
  host: Host[];
  type?: string[];
  port: string[];
  protocol: string[];
  method: string[];
  path: string[];
  extension: string[];
  request: Request[];
  status: string[];
  responselength: string[];
  mimetype?: string[];
  response: Response[];
  comment: string[];
}

export interface Host {
  _: string;
  $: GeneratedType;
}

export interface GeneratedType {
  ip: string;
}

export interface Request {
  _: string;
  $: GeneratedType2;
}

export interface GeneratedType2 {
  base64: string;
}

export interface Response {
  _: string;
  $: GeneratedType3;
}

export interface GeneratedType3 {
  base64: string;
}
