export const metadata = {
  title: 'Delete Account — Kaktus Booking',
  description: 'Request deletion of your Kaktus Booking account and associated data.',
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Delete Your Account</h1>
            <p className="text-gray-500 mt-2">Kaktus Booking — Account & Data Deletion</p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">How to request account deletion</h2>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <p className="font-medium text-gray-800">Open the Kaktus Pro app</p>
                    <p className="text-sm text-gray-500">Log in to your account if you haven't already.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <p className="font-medium text-gray-800">Go to Profile → Settings</p>
                    <p className="text-sm text-gray-500">Navigate to the Profile tab and tap on Settings.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <p className="font-medium text-gray-800">Tap "Delete Account"</p>
                    <p className="text-sm text-gray-500">Confirm your decision. Your account will be permanently deleted.</p>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Alternative: Contact us directly</h2>
              <p className="text-gray-600 text-sm mb-2">
                If you cannot access your account, send a deletion request to:
              </p>
              <a href="mailto:info@kaktusbooking.app" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@kaktusbooking.app
              </a>
              <p className="text-gray-500 text-sm mt-1">
                Include your registered phone number or email in the request. We will process it within 7 business days.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Data deletion details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">What data is deleted</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Permanently deleted:</p>
                    <ul className="text-sm text-gray-600 list-disc ml-4 mt-1 space-y-1">
                      <li>Your profile information (name, phone, email, photo)</li>
                      <li>Business/salon data and settings</li>
                      <li>Employee records</li>
                      <li>Customer contact list</li>
                      <li>Service and product catalogs</li>
                      <li>Push notification tokens</li>
                      <li>Device and login session data</li>
                      <li>Chat/message history</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-2 mt-4">
                  <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Retained for up to 90 days:</p>
                    <ul className="text-sm text-gray-600 list-disc ml-4 mt-1 space-y-1">
                      <li>Completed reservation records (for financial/tax reporting)</li>
                      <li>Transaction and payment records</li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-1">These are anonymized and automatically purged after the retention period.</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="text-center">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} Kaktus Booking. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
