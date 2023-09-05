import { error } from '@sveltejs/kit'

export async function GET({ params }) {
   
    const html = await getContributions(params)
    console.log(html)

    return new Response (html)
}


async function getContributions({user,year}: RouteParams)
{
    const api = `https://github.com/users/${user}/contributions?from=${year}-12-01&to=${year}-12-31`
    const response = await fetch(api)

    if(!response.ok){
        throw new Error(`Failed to fetch: ${response.status}`)
    }

    return await response.text()

}