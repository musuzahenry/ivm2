    import React, { useState, useEffect } from 'react';
    import { ClipLoader } from 'react-spinners';

    function Spinner() {
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        // Simulate data fetching or a long operation
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);

      return (
        <div>
          {isLoading ? (
            <ClipLoader color="#36D7B7" loading={isLoading} size={50} />
          ) : (
            <div>Content loaded!</div>
          )}
        </div>
      );
    }

    export default Spinner;