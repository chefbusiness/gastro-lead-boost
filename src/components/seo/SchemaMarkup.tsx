
import { useEffect } from 'react';

interface SchemaMarkupProps {
  schema: object;
  id?: string;
}

export const SchemaMarkup = ({ schema, id = 'schema-markup' }: SchemaMarkupProps) => {
  useEffect(() => {
    let schemaScript = document.querySelector(`#${id}`);
    
    if (!schemaScript) {
      schemaScript = document.createElement('script') as HTMLScriptElement;
      schemaScript.id = id;
      (schemaScript as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    
    (schemaScript as HTMLScriptElement).textContent = JSON.stringify(schema);

    return () => {
      const existingScript = document.querySelector(`#${id}`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [schema, id]);

  return null;
};
