// ────────────────────────────────────────────────────────────────
// ENROLL PAGE
//
// S3.2 (15 pts) — Static form markup with TailwindCSS:
//   • labeled student-id input (number)
//   • labeled course <select> (use the two SAMPLE_COURSES as options
//     for now)
//   • a submit button with a hover state
//   • a green success box and a red error box (hardcode both visible
//     for S3.2 — you will show/hide them in S4.4)
//
// S4.4 (15 pts) — Make it dynamic:
//   • fill the select with real courses from GET /courses (name + fee +
//     how many seats left)
//   • on submit: POST /enrollments with { studentId, courseId } (numbers!)
//   • success → show a success message in the green box, clear the form
//   • failure (404 / 409) → show the API's error message in the red box
//   • only one of the two boxes is visible at a time
// ────────────────────────────────────────────────────────────────
import { BASE_URL } from '../api';
// Use this sample data for the select options in S3.2.
// In S4.4 you will replace it with data from the API.
const SAMPLE_COURSES = [
  { id: 1, name: 'Sample Course One', fee: 120, seatsAvailable: 18 },
  { id: 2, name: 'Sample Course Two', fee: 200, seatsAvailable: 0 },
];

export default function EnrollPage() {
  // TODO S3.2 — build the static form (inputs + button + boxes)
  // TODO S4.4 — wire the form to the API
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">
        Enroll a student
      </h2>

      <div className="max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <form className="space-y-4">
          {/* Student ID Input */}
          <div>
            <label
              htmlFor="studentId"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Student ID
            </label>

            <input
              id="studentId"
              type="text"
              placeholder="Enter student ID"
              className="
                w-full rounded-md border border-slate-300
                px-3 py-2 text-sm
                focus:border-blue-500 focus:outline-none
                focus:ring-2 focus:ring-blue-200
              "
            />
          </div>

          {/* Course Select */}
          <div>
            <label
              htmlFor="course"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Course
            </label>

            <select
              id="course"
              className="
                w-full rounded-md border border-slate-300
                px-3 py-2 text-sm
                focus:border-blue-500 focus:outline-none
                focus:ring-2 focus:ring-blue-200
              "
            >
              <option value="">Select a course</option>

              {SAMPLE_COURSES.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name} - ${course.fee}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full rounded-md bg-blue-600 px-4 py-2
              text-sm font-medium text-white
              transition hover:bg-blue-700
            "
          >
            Enroll Student
          </button>
        </form>

        {/* Success Box */}
        <div
          className="
            mt-4 rounded-md border border-green-200
            bg-green-50 px-4 py-3
            text-sm text-green-700
          "
        >
          Student enrolled successfully!
        </div>

        {/* Error Box */}
        <div
          className="
            mt-4 rounded-md border border-red-200
            bg-red-50 px-4 py-3
            text-sm text-red-700
          "
        >
          Failed to enroll student. Please try again.
        </div>
      </div>
    </section>
  );
}
