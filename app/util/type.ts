interface ProjectDetail {
  id: number;
  title_two: string;
  label_two: string;
}

interface ProjectRequest {
  id:number;
  title: string;
  label: string;
  img: string;
  details: ProjectDetail[];
}

interface NewsDetail {
  id:number;
  title: string;
  label: string;
  img: string;
  time: string;
}
interface CorporateDetail {
  id: number;
  title: string;
  label: string;
  img: string;
}

export {
  type ProjectDetail,
  type ProjectRequest,
  type CorporateDetail,
  type NewsDetail,
};
