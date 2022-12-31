export interface accountInterface {
  token: string;
  userProfile: any;
  address:any,
  addressSelect:any
}
export interface bottomStatusInterface {
  status: boolean;
}
export interface messageInterface {
  count: number;
  list: any;
}
export interface categoryInterface {
  list: any;
}
export interface cartInterface {
  count: number;
  list: any;
  total:number
}
export interface orderInterface {
  status: number;
  list: any;
}
