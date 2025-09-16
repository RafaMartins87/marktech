import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Calendar, User, FileText } from 'lucide-react';

interface Occurrence {
  id: string;
  studentId: string;
  studentName: string;
  description: string;
  timestamp: Date;
  type: 'absence' | 'behavior' | 'other';
}

interface OccurrenceListProps {
  occurrences: Occurrence[];
}

const TYPE_COLORS = {
  absence: 'bg-blue-100 text-blue-800 border-blue-200',
  behavior: 'bg-red-100 text-red-800 border-red-200',
  other: 'bg-gray-100 text-gray-800 border-gray-200',
};

const TYPE_LABELS = {
  absence: 'Missed Class',
  behavior: 'Behavior Problem',
  other: 'Other',
};

export function OccurrenceList({ occurrences }: OccurrenceListProps) {
  if (occurrences.length === 0) {
    return (
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recent Occurrences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            No occurrences reported yet.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Recent Occurrences ({occurrences.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-3">
            {occurrences.map((occurrence) => (
              <div key={occurrence.id} className="p-4 border rounded-lg bg-card">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{occurrence.studentName}</span>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={TYPE_COLORS[occurrence.type]}
                  >
                    {TYPE_LABELS[occurrence.type]}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {occurrence.description}
                </p>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {occurrence.timestamp.toLocaleDateString()} at{' '}
                    {occurrence.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}