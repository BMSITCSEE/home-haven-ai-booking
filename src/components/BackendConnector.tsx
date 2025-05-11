
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface BackendConnectorProps {
  service: string;
  description?: string;
}

const BackendConnector = ({ service, description }: BackendConnectorProps) => {
  return (
    <Alert variant="default" className="bg-blue-50 border-blue-200 mb-6">
      <AlertCircle className="h-4 w-4 text-blue-500" />
      <AlertTitle>Backend Connection Point: {service}</AlertTitle>
      <AlertDescription>
        {description || `This component connects to the ${service} backend service. You could integrate an external service or API here.`}
      </AlertDescription>
    </Alert>
  );
};

export default BackendConnector;
