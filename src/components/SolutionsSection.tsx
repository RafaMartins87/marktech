import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ClipboardList,
  Calendar,
  Users,
  MessageSquare,
  BarChart3,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export function SolutionsSection() {
  const solutions = [
    {
      icon: <ClipboardList className="h-8 w-8 text-blue-600" />,
      title: "Occurrence Reporter",
      description: "Streamline student incident reporting with our intuitive system. Track attendance, behavior issues, and important events with detailed timestamped records.",
      features: ["Real-time reporting", "Student tracking", "Automated notifications", "Data analytics"],
      badge: "Popular",
      badgeColor: "bg-blue-100 text-blue-800"
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Daily Routine Planner",
      description: "Organize your teaching day with smart scheduling, lesson planning, and task management designed specifically for educators.",
      features: ["Lesson planning", "Task automation", "Schedule sync", "Resource library"],
      badge: "New",
      badgeColor: "bg-green-100 text-green-800"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Chama",
      description: "A secure social learning environment where students and teachers can collaborate, share resources, and build educational communities.",
      features: ["Secure messaging", "Resource sharing", "Group collaboration", "Progress tracking"],
      badge: "Coming Soon",
      badgeColor: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Comprehensive Educational Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From daily management to long-term analytics, our suite of tools covers
            every aspect of modern educational administration and teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {solution.icon}
                    <div>
                      <CardTitle className="text-lg">{solution.title}</CardTitle>
                    </div>
                  </div>
                  <Badge className={solution.badgeColor}>
                    {solution.badge}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Key Features:</h5>
                  <ul className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="w-full group" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group">
            View All Solutions
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}