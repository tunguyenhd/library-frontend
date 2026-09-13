import { useState } from "react";
import { exercisesGroups } from "../data/exercisesGroups";
import CodeBox from "../components/CodeBox";

interface ExercisesPageProps {
  onBack: () => void;
}

export default function ExercisesPage({ onBack }: ExercisesPageProps) {
  // Use index 0 as default if exists
  const [activeCourse, setActiveCourse] = useState(exercisesGroups[0]?.course);
  
  // Find topics for active course
  const courseGroups = exercisesGroups.filter(g => g.course === activeCourse);
  const [activeTopic, setActiveTopic] = useState(courseGroups[0]?.topic);

  // When course changes, reset topic to first available topic in that course
  const handleCourseChange = (course: string) => {
    setActiveCourse(course);
    const groups = exercisesGroups.filter(g => g.course === course);
    if (groups.length > 0) {
      setActiveTopic(groups[0].topic);
    }
  };

  const currentGroup = exercisesGroups.find(g => g.course === activeCourse && g.topic === activeTopic);
  const courses = Array.from(new Set(exercisesGroups.map(g => g.course)));

  return (
    <div className="knowledge-page exercises-page">
      <div className="page-header">
        <a
          href="./"
          className="back-btn"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          ← Trang chủ
        </a>
        <h1>Tài Nguyên Toàn Diện</h1>
      </div>

      <div className="course-tabs">
        {courses.map(course => (
          <button 
            key={course}
            className={`course-tab ${activeCourse === course ? 'active' : ''}`}
            onClick={() => handleCourseChange(course)}
          >
            {course}
          </button>
        ))}
      </div>

      <div className="exercises-layout">
        <aside className="exercises-sidebar">
          <h3>Các Chủ Đề</h3>
          <ul className="day-list">
            {courseGroups.map(group => (
              <li key={group.topic}>
                <button 
                  className={`day-btn ${activeTopic === group.topic ? "active" : ""}`}
                  onClick={() => setActiveTopic(group.topic)}
                >
                  {group.topic} ({group.exercises.length} bài)
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="exercises-content">
          {currentGroup && currentGroup.exercises.map(exercise => (
            <div className="exercise-card" key={exercise.id} id={exercise.id}>
              <h2>{exercise.title}</h2>
              <div className="exercise-code">
                <CodeBox
                  title={`Source Code - ${exercise.title}`}
                  code={`<!-- HTML -->\n${exercise.html}\n\n/* CSS */\n${exercise.css}\n\n// JavaScript\n${exercise.js}`}
                  preview={`<style>${exercise.css}</style>\n${exercise.html}\n<script>${exercise.js}</script>`}
                />
              </div>
            </div>
          ))}
          {!currentGroup && <p>Chưa có dữ liệu</p>}
        </div>
      </div>
    </div>
  );
}
