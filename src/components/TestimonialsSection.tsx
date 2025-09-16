import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Principal",
      school: "Lincoln Academy",
      content: "EduTech Solutions has completely transformed how we manage our school operations. The occurrence reporting system alone has saved us countless hours and improved our communication with parents.",
      rating: 5,
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Mathematics Teacher",
      school: "Roosevelt Middle School",
      content: "The daily routine planner is a game-changer. I can organize my lessons, track student progress, and collaborate with colleagues all in one place. It's exactly what teachers need.",
      rating: 5,
      initials: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Elementary Teacher",
      school: "Sunset Elementary",
      content: "As a new teacher, these tools have been invaluable. The interface is intuitive, and the support team is amazing. I feel more confident and organized in my classroom.",
      rating: 5,
      initials: "ER"
    },
    {
      name: "David Thompson",
      role: "IT Director",
      school: "Washington District",
      content: "We implemented EduTech across our entire district. The security features, reliability, and ease of deployment made it the perfect choice for our 15 schools.",
      rating: 5,
      initials: "DT"
    },
    {
      name: "Lisa Park",
      role: "School Counselor",
      school: "Heritage High School",
      content: "The analytics dashboard helps me identify students who need extra support early. The insights have been crucial for our intervention programs.",
      rating: 5,
      initials: "LP"
    },
    {
      name: "Robert Wilson",
      role: "Vice Principal",
      school: "Madison Elementary",
      content: "Parent communication has never been easier. The automated updates and messaging system has significantly improved our parent engagement rates.",
      rating: 5,
      initials: "RW"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of educators who have transformed their teaching experience 
            with our innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.school}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl mb-4">Ready to Join Our Community?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Experience the difference our solutions can make in your educational environment. 
            Start your free trial today and see why educators choose EduTech Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="text-sm text-muted-foreground">
              • 500+ Schools Trust Us
            </div>
            <div className="text-sm text-muted-foreground">
              • 50K+ Active Teachers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}