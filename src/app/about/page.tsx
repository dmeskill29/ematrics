const people = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    bio: 'Former VP of Sales at TechCorp with 15+ years building high-performing sales teams.',
    imageUrl: '/team/sarah-chen.jpg',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'CTO',
    bio: 'AI researcher and former Google engineer specializing in conversational AI and NLP.',
    imageUrl: '/team/marcus-rodriguez.jpg',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Product',
    bio: 'Product leader with deep expertise in sales enablement and revenue operations.',
    imageUrl: '/team/emily-watson.jpg',
  },
];

const values = [
  {
    name: 'Sales-First Approach',
    description: 'Every feature we build is designed by sales professionals, for sales professionals.',
  },
  {
    name: 'AI with Purpose',
    description: 'We believe AI should augment human capability, not replace it. Our technology empowers sales professionals.',
  },
  {
    name: 'Data-Driven Results',
    description: 'Everything we do is measured. Our customers see an average 23% increase in quota attainment.',
  },
  {
    name: 'Continuous Learning',
    description: 'Sales is an evolving discipline. Our platform adapts and learns with your team.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Empowering Sales Teams with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded by sales leaders who understood the gap between potential and performance. 
              We&apos;re building the future of sales enablement through intelligent technology.
            </p>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            To transform every sales conversation into a learning opportunity. We believe that with the right coaching 
            and insights, every sales professional can reach their full potential and drive meaningful revenue growth.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-2.83V5.25a2.25 2.25 0 00-2.25-2.25H4.875C4.392 3 4 3.392 4 3.875v.686m16.5 0v-.686C20.5 3.392 20.108 3 19.625 3h-.875a2.25 2.25 0 00-2.25 2.25v1.36c2.083.653 3.75 2.445 3.75 4.64z" />
                  </svg>
                </div>
                500+ Teams Transformed
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Sales organizations across the globe trust Ematrics to accelerate their revenue growth.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                23% Avg. Quota Increase
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Our customers see measurable improvements in sales performance within their first quarter.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
                  </svg>
                </div>
                AI-Powered Insights
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Advanced machine learning models analyze millions of sales conversations to provide actionable insights.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These principles guide everything we do, from product development to customer success.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team combines deep sales expertise with cutting-edge AI research to create solutions that actually work.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="aspect-square w-full bg-gray-200 rounded-2xl mb-6">
                {/* Placeholder for team member photos */}
                <div className="flex items-center justify-center h-full text-gray-400">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-primary-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to transform your sales team?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join hundreds of sales teams already using Ematrics to accelerate their revenue growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/demo"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Book a Demo
            </a>
            <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Sales <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
