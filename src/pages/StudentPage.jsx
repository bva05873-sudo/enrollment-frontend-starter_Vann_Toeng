// ────────────────────────────────────────────────────────────────
// STUDENT PAGE
//
// S3.3 (15 pts) — Static markup with TailwindCSS, using SAMPLE_STUDENT:
//   • a student-id input + "Load" button (styled, with hover state)
//   • a student info card (name, email, phone)
//   • an enrollments table: course name, fee, enroll date,
//     status badge (ACTIVE = green, DROPPED = gray),
//     and a "Drop" button ONLY on ACTIVE rows
//
// S4.3 (10 pts) — Clicking "Load" fetches GET /students/<id> and shows
//   the real student + enrollments. For an unknown id, show the API's
//   error message (red box) instead of the card.
//
// S4.5 (10 pts) — Clicking "Drop" calls PUT /enrollments/<id>/drop,
//   then reloads the student so the status badge updates and the button
//   disappears.
// ────────────────────────────────────────────────────────────────
import { BASE_URL } from '../api';
// Use this sample data to build the static markup for S3.3.
// In S4.3 you will replace it with data from the API.
const SAMPLE_STUDENT = {
  id: 1,
  name: 'Sample Student',
  email: 'sample@example.com',
  phone: '012345678',
  enrollments: [
    {
      id: 1,
      status: 'ACTIVE',
      enrollDate: '2026-07-01',
      course: { name: 'Sample Course One', fee: 120 },
    },
    {
      id: 2,
      status: 'DROPPED',
      enrollDate: '2026-06-01',
      course: { name: 'Sample Course Two', fee: 200 },
    },
  ],
};

export default function StudentPage() {
  const student = SAMPLE_STUDENT;

  // TODO S3.3 — build the static page (input + card + enrollments table)
  // TODO S4.3 — load the real student from the API on "Load"
  // TODO S4.5 — make the "Drop" button work, then reload the student
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold text-slate-800">
        Student lookup
      </h2>

      {/* Student ID Input */}
      <div className="mb-6 flex gap-3">
        <input
          type="number"
          placeholder="Enter student ID"
          className="rounded border border-slate-300 px-3 py-2"
        />

        <button
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Load
        </button>
      </div>

      {/* Student Info Card */}
      <div className="mb-6 rounded-lg border bg-white p-5 shadow">
        <h3 className="mb-3 text-lg font-semibold text-slate-800">
          Student Information
        </h3>

        <div className="space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-medium">ID:</span> {student.id}
          </p>
          <p>
            <span className="font-medium">Name:</span> {student.name}
          </p>
          <p>
            <span className="font-medium">Email:</span> {student.email}
          </p>
          <p>
            <span className="font-medium">Phone:</span> {student.phone}
          </p>
        </div>
      </div>

      {/* Enrollments Table */}
      <div className="overflow-hidden rounded-lg border bg-white shadow">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3">Fee</th>
              <th className="px-4 py-3">Enroll Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {student.enrollments.map((enrollment) => (
              <tr
                key={enrollment.id}
                className="border-t"
              >
                <td className="px-4 py-3">
                  {enrollment.course.name}
                </td>

                <td className="px-4 py-3">
                  ${enrollment.course.fee}
                </td>

                <td className="px-4 py-3">
                  {enrollment.enrollDate}
                </td>

                <td className="px-4 py-3">
                  {enrollment.status === 'ACTIVE' ? (
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      DROPPED
                    </span>
                  )}
                </td>

                <td className="px-4 py-3">
                  {enrollment.status === 'ACTIVE' && (
                    <button
                      className="rounded bg-red-600 px-3 py-1 text-xs text-white hover:bg-red-700"
                    >
                      Drop
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
