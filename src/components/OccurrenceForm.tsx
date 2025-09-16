import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { AlertCircle, Check } from 'lucide-react';
import { Alert, AlertDescription } from './ui/alert';

interface Occurrence {
  id: string;
  studentId: string;
  studentName: string;
  description: string;
  timestamp: Date;
  type: 'absence' | 'behavior' | 'other';
}

interface OccurrenceFormProps {
  onSubmit: (occurrence: Omit<Occurrence, 'id' | 'timestamp'>) => void;
}

const STUDENTS = [
  { id: '1', name: 'Alice Johnson', grade: '9A' },
  { id: '2', name: 'Bob Smith', grade: '9A' },
  { id: '3', name: 'Carol Davis', grade: '9B' },
  { id: '4', name: 'David Wilson', grade: '10A' },
  { id: '5', name: 'Emma Brown', grade: '10A' },
  { id: '6', name: 'Frank Miller', grade: '10B' },
  { id: '7', name: 'Grace Taylor', grade: '11A' },
  { id: '8', name: 'Henry Anderson', grade: '11B' },
];

const OCCURRENCE_TYPES = [
  { value: 'absence', label: 'Missed Class' },
  { value: 'behavior', label: 'Behavior Problem' },
  { value: 'other', label: 'Other' },
];

export function OccurrenceForm({ onSubmit }: OccurrenceFormProps) {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'absence' | 'behavior' | 'other'>('absence');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedStudent || !description.trim()) {
      return;
    }

    setIsSubmitting(true);
    
    const student = STUDENTS.find(s => s.id === selectedStudent);
    if (!student) return;

    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call

    onSubmit({
      studentId: selectedStudent,
      studentName: `${student.name} (${student.grade})`,
      description: description.trim(),
      type,
    });

    // Reset form
    setSelectedStudent('');
    setDescription('');
    setType('absence');
    setIsSubmitting(false);
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const isValid = selectedStudent && description.trim();

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Report Student Occurrence
        </CardTitle>
      </CardHeader>
      <CardContent>
        {showSuccess && (
          <Alert className="mb-4 border-green-200 bg-green-50">
            <Check className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Occurrence successfully reported and recorded.
            </AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="student">Select Student</Label>
            <Select value={selectedStudent} onValueChange={setSelectedStudent}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a student..." />
              </SelectTrigger>
              <SelectContent>
                {STUDENTS.map((student) => (
                  <SelectItem key={student.id} value={student.id}>
                    {student.name} ({student.grade})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Occurrence Type</Label>
            <Select value={type} onValueChange={(value: 'absence' | 'behavior' | 'other') => setType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {OCCURRENCE_TYPES.map((occurrenceType) => (
                  <SelectItem key={occurrenceType.value} value={occurrenceType.value}>
                    {occurrenceType.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the occurrence in detail..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] resize-y"
            />
          </div>

          <Button 
            type="submit" 
            disabled={!isValid || isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Occurrence Report'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}