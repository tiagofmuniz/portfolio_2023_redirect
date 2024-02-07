import style from "./course_list.module.scss";
interface CourseInfo {
  course_name: string;
  course_details: string;
}
export default function Course({ course_name, course_details }: CourseInfo) {
  return (
    <div className={style.courseContainer}>
      <span className={style.course_name}>{course_name}</span>
      <span className={style.course_details}>: {course_details}</span>
    </div>
  );
}
