type HTTPMethods = 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'CONNECT' | 'TRACE';

type ShapeType = 'String' | 'Boolean' | 'Regex' | 'Integer';

export interface IShape {
  value?: string;
  type: ShapeType | string;
  required: boolean;
  min: number;
  max: number;
}

interface IFeatures {
  comment: object;
  uploads: ['file_sharing', 'profile'];
  integrations: {
    auth: ['  google,facebook,youtube'];
  };
}

export interface IEndPoint {
  [name: string]: {
    url: string;
    method: HTTPMethods | string;
    shape: { [name: string]: IShape };
    sampleData?: string;
  };
}

const info: IEndPoint = {
  otp: {
    url: '/api/voyager/C/CustomerAccount/OTPRegister',
    method: 'POST',
    shape: {
      mobile: { type: 'String', required: true, max: 12, min: 12 },
      confirmTerms: { type: 'Boolean', required: true, max: 0, min: 0 },
      notRobot: { type: 'Boolean', required: true, max: 0, min: 0 },
    },
    sampleData: '{"mobile":"09333039702","confirmTerms":true,"notRobot":false}',
  },
};
