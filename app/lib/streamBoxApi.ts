export async function getCustomerBasedOnContactNumber (mobileNumber: string) : Promise<void> {
  const endpoint = `${process.env.STREAMBOXMEDIA_URL}/api/resource/Customer?filters=[["mobile_no","=","${mobileNumber}"]]&fields=["customer_name", "email_id"]`;
  
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${process.env.STREAMBOX_AUTH_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data?.[0];
  } catch (error) {
    console.error('Fetch error:', error);
  }

}