import React, { useEffect, useState } from 'react'
import { useCounter } from './useCounter'
import { useFetch } from './useFetch';
import Loading from '../components/loading';
import Card from '../components/card';

const CustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);
  const [catDetails, setCatDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { data: catImageData, loading: initialLoading } = useFetch({
    url: `https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1&page=${counter}`
  });

  useEffect(() => {
    const fetchCatDetails = async () => {
      if (catImageData && catImageData[0] && catImageData[0].id) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.thecatapi.com/v1/images/${catImageData[0].id}?api_key=live_59PRSjxYdi7bxr9neq7aBxsnXVA9bKwqpqi6Df6B6484PFuag24w6voYpq5TeuC7`
          );
          const data = await response.json();
          setCatDetails(data);
        } catch (error) {
          console.error("Error fetching cat details:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchCatDetails();
  }, [catImageData]);

  const hasValidBreed = catDetails && catDetails.breeds && catDetails.breeds.length > 0;
  
  const loading = initialLoading || isLoading;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">El mejor explorador de gatos del mundo!!</h1>
      <hr />
      
      {loading ? (
        <Loading />
      ) : hasValidBreed ? (
        <Card 
          imageUrl={catDetails.url} 
          breed={catDetails.breeds[0]} 
        />
      ) : (
        <div className="alert alert-warning">
          No hay info!!!!
        </div>
      )}
      
      <div className="d-flex justify-content-center mt-4 gap-2">
        <button className='btn btn-secondary' onClick={() => decrement(1)} disabled={loading || counter <= 1}>Previous Cat</button>
        <button className='btn btn-primary' onClick={() => increment(1)} disabled={loading}>Next Cat</button>
      </div>
    </div>
  )
}

export default CustomHook