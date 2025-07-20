
import { useEffect } from 'react';

interface SchemaMarkupProps {
  schema: object;
  id?: string;
}

export const SchemaMarkup = ({ schema, id = 'schema-markup' }: SchemaMarkupProps) => {
  useEffect(() => {
    let schemaScript = document.querySelector(`#${id}`);
    
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = id;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    
    schemaScript.textContent = JSON.stringify(schema);

    return () => {
      const existingScript = document.querySelector(`#${id}`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [schema, id]);

  return null;
};
