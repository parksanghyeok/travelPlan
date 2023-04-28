export interface DayListItemType {
  title: string;
  lat: number;
  lng: number;
  blogs: string[];
  day: number;
  description: string;
  image_url: string;
}

// 로그인 데이터 타입
export interface AuthLoginType {
  email: string;
  password: string;
}

// 회원가입 데이터 타입
export interface AuthJoinType {
  email: string;
  password: string;
  name: string;
}