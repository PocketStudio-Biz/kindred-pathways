import Section from "@/components/Section";
import Card from "@/components/Card";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/20 to-background text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-primary animate-fade-in">Welcome to Your Safe Space</h1>
          <p className="text-xl mb-8 animate-fade-in">
            A guide created with love for our queer and neurodivergent community. Here, you'll find
            practical strategies to reduce overwhelm, build connections, and create positive change at
            your own pace.
          </p>
        </div>
      </section>

      {/* Mental Load Section */}
      <Section title="Reducing Mental Load">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Task Prioritization">
            <p>Start small with these three steps:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Choose your top 3 tasks for today</li>
              <li>Break them into smaller, manageable steps</li>
              <li>Celebrate completing each step</li>
            </ul>
          </Card>
          <Card title="Time Blocking">
            <p>Create gentle structure in your day:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Set aside focus time for important tasks</li>
              <li>Include regular breaks for rest</li>
              <li>Be flexible with your schedule</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Connections Section */}
      <Section title="Building Meaningful Connections" className="bg-primary/5">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Creating Social Systems">
            <p>Build your support network:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Identify safe spaces in your community</li>
              <li>Connect with like-minded individuals</li>
              <li>Set boundaries that work for you</li>
            </ul>
          </Card>
          <Card title="Communication Tools">
            <p>Express yourself comfortably:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use text-based communication when needed</li>
              <li>Practice self-advocacy</li>
              <li>Share your preferences openly</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Daily Tasks Section */}
      <Section title="Streamlining Daily Tasks">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Automation Tips">
            <p>Make technology work for you:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Set up calendar reminders</li>
              <li>Use task management apps</li>
              <li>Create email templates</li>
            </ul>
          </Card>
          <Card title="Habit Building">
            <p>Create sustainable routines:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Start with one small habit</li>
              <li>Link it to existing routines</li>
              <li>Track your progress gently</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Closing Message */}
      <section className="section-padding text-center bg-gradient-to-t from-primary/20 to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-secondary mb-4">You're Doing Great!</h2>
          <p className="text-xl">
            Remember: Progress isn't linear, and that's perfectly okay. Your journey is uniquely yours,
            and every small step forward is worth celebrating. 🌈✨
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;