import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notesGroups } from "../data/notesGroups";

interface NotesPageProps {
  onBack: () => void;
}

export default function NotesPage({ onBack }: NotesPageProps) {
  const [activeCourse, setActiveCourse] = useState(notesGroups[0]?.course);
  
  const courseGroups = notesGroups.find(g => g.course === activeCourse);
  const [activeTopic, setActiveTopic] = useState(courseGroups?.topics[0]?.topic);
  const [activeNote, setActiveNote] = useState(courseGroups?.topics[0]?.notes[0]);

  const handleCourseChange = (course: string) => {
    setActiveCourse(course);
    const groups = notesGroups.find(g => g.course === course);
    if (groups && groups.topics.length > 0) {
      setActiveTopic(groups.topics[0].topic);
      setActiveNote(groups.topics[0].notes[0]);
    } else {
      setActiveTopic(undefined);
      setActiveNote(undefined);
    }
  };

  const handleTopicChange = (topic: string) => {
    setActiveTopic(topic);
    const topicData = courseGroups?.topics.find(t => t.topic === topic);
    if (topicData && topicData.notes.length > 0) {
      setActiveNote(topicData.notes[0]);
    }
  };

  const courses = notesGroups.map(g => g.course);

  return (
    <div className="knowledge-page notes-page">
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
        <h1>Sổ Tay Ghi Chú</h1>
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

      <div className="notes-layout">
        <aside className="notes-sidebar">
          <h3>Các Chủ Đề</h3>
          <ul className="topic-list">
            {courseGroups?.topics.map(t => (
              <li key={t.topic}>
                <button 
                  className={`topic-btn ${activeTopic === t.topic ? "active" : ""}`}
                  onClick={() => handleTopicChange(t.topic)}
                >
                  {t.topic}
                </button>
                {activeTopic === t.topic && (
                  <ul className="sub-note-list">
                    {t.notes.map(note => (
                      <li key={note.id}>
                        <button
                          className={`sub-note-btn ${activeNote?.id === note.id ? "active" : ""}`}
                          onClick={() => setActiveNote(note)}
                        >
                          {note.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        <div className="notes-content">
          {activeNote ? (
            <div className="markdown-card">
              <h2 className="markdown-title">{activeNote.title}</h2>
              <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {activeNote.content}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <p>Chưa có ghi chú nào.</p>
          )}
        </div>
      </div>
    </div>
  );
}
