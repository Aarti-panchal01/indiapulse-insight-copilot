import { Activity, TrendingUp, Map, Brain, Zap, Users, Target, BarChart3 } from "lucide-react";
import SlideSection from "@/components/SlideSection";
import PulseWave from "@/components/PulseWave";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import problemVisual from "@/assets/problem-visual.jpg";
import solutionMockup from "@/assets/solution-mockup.jpg";
import geoVisual from "@/assets/geo-visual.jpg";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Slide 1: Title Slide */}
      <SlideSection id="title" className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="relative z-10 text-center animate-slide-in-up">
          <div className="flex justify-center mb-8">
            <PulseWave />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
            IndiaPulse
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
            The AI Transparency Copilot
          </p>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Turning Open Data into Instant, Natural Language Insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <p className="text-lg font-medium text-secondary">Team: DATA-MADE-EASY</p>
            <span className="hidden sm:inline text-border">|</span>
            <p className="text-lg text-muted-foreground">Participant: Aarti Panchal</p>
          </div>
          <Button size="lg" className="shadow-glow">
            Explore the Solution
          </Button>
        </div>
      </SlideSection>

      {/* Slide 2: The Problem */}
      <SlideSection id="problem" background="accent">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Data Accessibility Barrier
            </h2>
            <p className="text-3xl font-semibold mb-6 text-primary">
              Massive Data, Minimal Understanding 😩
            </p>
            <div className="space-y-4 text-lg">
              <div>
                <p className="font-semibold text-secondary mb-2">India's Data Paradox:</p>
                <p className="text-muted-foreground">
                  India produces vast public data, but it's locked in complex portals and raw CSV files.
                </p>
              </div>
              <div>
                <p className="font-semibold text-destructive mb-2">The Impact:</p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• Citizens can't interpret vital trends (e.g., air quality, spending)</li>
                  <li>• Journalists waste hours on manual cleaning</li>
                  <li>• Policymakers miss real-time local insights</li>
                </ul>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-foreground">THE GAP:</p>
                <p className="text-muted-foreground">Open Data Availability ≠ Open Data Usability</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={problemVisual} alt="Data overwhelm visualization" className="w-full h-auto" />
          </div>
        </div>
      </SlideSection>

      {/* Slide 3: The Solution */}
      <SlideSection id="solution">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Introducing IndiaPulse
          </h2>
          <p className="text-3xl font-semibold mb-6 gradient-hero bg-clip-text text-transparent">
            AI-Powered Insights, On Demand 💡
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-glow">
            <img src={solutionMockup} alt="IndiaPulse interface mockup" className="w-full h-auto" />
          </div>
          <div className="space-y-6">
            <p className="text-xl font-semibold text-secondary">The Pitch:</p>
            <p className="text-lg text-foreground leading-relaxed">
              IndiaPulse is a web-based AI platform that converts India's open datasets into natural 
              language insights and dynamic, interactive visualizations.
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-3">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Make public data truly understandable for everyone
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Your personal "Copilot" for India's public data
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Data-driven decisions for everyone from students to policymakers
                </span>
              </li>
            </ul>
          </div>
        </div>
      </SlideSection>

      {/* Slide 4: Feature 1 - Conversational Analytics */}
      <SlideSection id="feature1" background="accent">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Conversational Analytics
          </h2>
          <p className="text-2xl font-semibold text-primary">
            Ask in Plain English. Get an Instant Chart.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  1
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2 text-foreground">Natural Language Input</p>
                  <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-muted-foreground italic">
                      "Compare air pollution in Delhi and Mumbai over the last 5 years"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                  2
                </div>
                <div>
                  <p className="font-semibold text-lg mb-2 text-foreground">AI Processing</p>
                  <p className="text-muted-foreground">
                    Converts natural language → SQL Query → Data Fetch
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary-foreground">
                  3
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-lg mb-2 text-foreground">Interactive Output</p>
                  <div className="bg-muted rounded-lg p-6 mt-2">
                    <div className="h-48 flex items-end justify-around gap-2">
                      <div className="bg-primary w-full rounded-t-lg" style={{ height: "60%" }}></div>
                      <div className="bg-accent w-full rounded-t-lg" style={{ height: "40%" }}></div>
                      <div className="bg-primary w-full rounded-t-lg" style={{ height: "75%" }}></div>
                      <div className="bg-accent w-full rounded-t-lg" style={{ height: "50%" }}></div>
                      <div className="bg-primary w-full rounded-t-lg" style={{ height: "85%" }}></div>
                      <div className="bg-accent w-full rounded-t-lg" style={{ height: "65%" }}></div>
                    </div>
                    <div className="flex justify-around mt-4 text-sm text-muted-foreground">
                      <span>2019</span>
                      <span>2020</span>
                      <span>2021</span>
                      <span>2022</span>
                      <span>2023</span>
                      <span>2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium text-primary">
              Eliminates the need for manual data filtering or complex scripting
            </p>
          </div>
        </div>
      </SlideSection>

      {/* Slide 5: Feature 2 - Smart Visualizations */}
      <SlideSection id="feature2">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Smart & Geo-Enabled Visualizations
          </h2>
          <p className="text-2xl font-semibold text-primary">
            Data in Context: Maps, Trends, and Anomalies 🗺️
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Geographic Intelligence</h3>
            </div>
            <div className="rounded-lg overflow-hidden mb-4">
              <img src={geoVisual} alt="India heatmap visualization" className="w-full h-auto" />
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• State-level, district-level, and geofenced insights</li>
              <li>• Real-time heatmaps and location-based analysis</li>
              <li>• Example: COVID-19 vaccination rates by district</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Automated Summaries</h3>
            </div>
            <div className="bg-muted rounded-lg p-6 mb-4 h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                <polyline
                  points="0,80 40,60 80,70 120,40 160,50 200,30"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                <circle cx="120" cy="40" r="6" fill="hsl(var(--destructive))" className="pulse-animation" />
              </svg>
              <div className="absolute top-4 right-4 bg-card p-3 rounded-lg shadow-card text-xs border border-border">
                <p className="font-semibold text-foreground">Anomaly Detected</p>
                <p className="text-muted-foreground">Unusual spike at Q3</p>
              </div>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Displays key trends and patterns</li>
              <li>• Automatic anomaly detection</li>
              <li>• Statistical summaries in seconds</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8 text-lg font-medium text-secondary">
          No more raw tables; instantly see patterns, outliers, and locations
        </p>
      </SlideSection>

      {/* Slide 6: Feature 3 - Predictive Insights */}
      <SlideSection id="feature3" background="accent">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Predictive Insights
          </h2>
          <p className="text-2xl font-semibold text-primary">
            Forecasting Tomorrow's Trends Today 🔮
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border mb-8">
            <div className="bg-muted rounded-lg p-6 mb-6">
              <svg className="w-full h-64" viewBox="0 0 400 200">
                {/* Historical data - solid line */}
                <polyline
                  points="0,150 50,130 100,140 150,110 200,120 250,100"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                />
                {/* Predicted data - dashed line */}
                <polyline
                  points="250,100 300,85 350,90 400,70"
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                />
                {/* Confidence interval */}
                <path
                  d="M 250,90 L 300,75 L 350,78 L 400,58 L 400,82 L 350,102 L 300,95 L 250,110 Z"
                  fill="hsl(var(--accent))"
                  opacity="0.2"
                />
              </svg>
              <div className="flex justify-between text-sm text-muted-foreground mt-2 px-4">
                <span>Historical Data →</span>
                <span>← Prediction</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">The Value:</h4>
                <p className="text-muted-foreground">
                  Move beyond historical reporting to actionable forecasting using robust ML models 
                  (Prophet, LSTM).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-foreground">Use Cases:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Predicting school enrollment needs</li>
                  <li>• Forecasting infrastructure repair requirements</li>
                  <li>• Expected rainfall projections</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-lg font-medium text-secondary">
            Proactive governance and planning through data-driven predictions
          </p>
        </div>
      </SlideSection>

      {/* Slide 7: Tech Stack */}
      <SlideSection id="tech">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Tech Stack
          </h2>
          <p className="text-2xl font-semibold text-primary">
            Simple, Scalable, and Open ⚙️
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <FeatureCard
            icon={<Activity className="w-6 h-6 text-primary" />}
            title="Frontend"
            description="React / Streamlit for rapid, responsive deployment"
          />
          <FeatureCard
            icon={<Brain className="w-6 h-6 text-accent" />}
            title="AI Layer"
            description="GPT / Llama 3 + LangChain for NL → SQL conversion"
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6 text-primary" />}
            title="Data Layer"
            description="data.gov.in, Census data, SQLite/Pandas integration"
          />
          <FeatureCard
            icon={<Map className="w-6 h-6 text-accent" />}
            title="Visualization"
            description="Plotly, Chart.js, Leaflet Maps for rich graphics"
          />
        </div>
        <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Architecture Flow</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-foreground">Data Sources</p>
                <p className="text-sm text-muted-foreground">data.gov.in • Census Data • State Portals</p>
              </div>
            </div>
            <div className="h-8 w-0.5 bg-border ml-6"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-foreground">AI Core</p>
                <p className="text-sm text-muted-foreground">GPT/Llama 3 • NLP Processing • Query Generation</p>
              </div>
            </div>
            <div className="h-8 w-0.5 bg-border ml-6"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-foreground">Output</p>
                <p className="text-sm text-muted-foreground">Interactive Charts • Maps • Insights</p>
              </div>
            </div>
          </div>
        </div>
      </SlideSection>

      {/* Slide 8: Impact & Vision */}
      <SlideSection id="impact" background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Impact & Vision
          </h2>
          <p className="text-2xl font-semibold text-primary">
            Driving Transparency, Accountability, and Literacy ✅
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center shadow-glow">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Citizens</h3>
            <p className="text-secondary-foreground">
              Fosters data literacy and holds government accountable with easy-to-digest facts
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center shadow-glow">
              <Activity className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Journalists</h3>
            <p className="text-secondary-foreground">
              Cuts data cleaning time from hours to seconds, enabling quicker, deeper stories
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-4 flex items-center justify-center shadow-glow">
              <Target className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-primary-foreground">Policymakers</h3>
            <p className="text-secondary-foreground">
              Provides real-time, location-specific insights to optimize spending and service delivery
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
          <h3 className="text-2xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
            Our Vision
          </h3>
          <p className="text-lg text-primary-foreground leading-relaxed">
            To be the default, trusted platform for anyone seeking a true, data-backed understanding of India.
          </p>
          <p className="mt-4 text-primary font-semibold">
            IndiaPulse is the key to unlocking the public value of India's open data.
          </p>
          <div className="mt-8">
            <Button size="lg" className="shadow-glow">
              Join the Data Revolution
            </Button>
          </div>
        </div>
      </SlideSection>

      {/* Navigation Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#title" className="hover:text-primary transition-smooth">Title</a>
            <span className="text-border">•</span>
            <a href="#problem" className="hover:text-primary transition-smooth">Problem</a>
            <span className="text-border">•</span>
            <a href="#solution" className="hover:text-primary transition-smooth">Solution</a>
            <span className="text-border">•</span>
            <a href="#feature1" className="hover:text-primary transition-smooth">Analytics</a>
            <span className="text-border">•</span>
            <a href="#feature2" className="hover:text-primary transition-smooth">Visualizations</a>
            <span className="text-border">•</span>
            <a href="#feature3" className="hover:text-primary transition-smooth">Predictions</a>
            <span className="text-border">•</span>
            <a href="#tech" className="hover:text-primary transition-smooth">Tech</a>
            <span className="text-border">•</span>
            <a href="#impact" className="hover:text-primary transition-smooth">Impact</a>
          </div>
          <p className="text-center mt-6 text-muted-foreground">
            © 2025 IndiaPulse • DATA-MADE-EASY Team
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
