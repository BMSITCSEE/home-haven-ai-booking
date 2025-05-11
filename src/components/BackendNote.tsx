
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface BackendNoteProps {
  feature: string;
}

const BackendNote = ({ feature }: BackendNoteProps) => {
  return (
    <Alert variant="default" className="bg-amber-50 border-amber-200 mb-6">
      <AlertCircle className="h-4 w-4 text-amber-500" />
      <AlertTitle>Backend Integration Point</AlertTitle>
      <AlertDescription>
        This {feature} would connect to your backend API. This is where you could integrate your AI booking assistant.
      </AlertDescription>
    </Alert>
  );
};

export default BackendNote;
