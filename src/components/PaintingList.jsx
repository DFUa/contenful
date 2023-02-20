import React from 'react';
import useSWR from 'swr'
import { Spinner } from '@contentful/f36-spinner'
import PaintingItem from './PaintingItem'
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
})

const fetcher = async () => {
  const entryItems = await client.getEntries({ content_type: 'painting' });
  console.log(entryItems);
  const tagItems = await client.getTags();
  const tags = tagItems.items.map((tag) => tag.name);

  const entries = entryItems.items.map((entry) => {
    return {
      name: entry.fields.name,
      image: entry.fields.image.fields.file.url,
      artist: entry.fields.artist.fields.name,
      desc: entry.fields.desc,
      tags: entry.metadata.tags
        .map((t) => tagItems.items.find((ti) => ti.sys.id === t.sys.id))
        .map((t) => t.name),
    }
  });

  return { entries, tags }
}
const PaintingList = () => {
  const { data, error } = useSWR('contentful', fetcher);

  if (error) {
    console.log(error)
    return <div>failed to load </div>
  }
  if (!data) return <Spinner size="large" />

  return (
    <div className="grid">
      {
        data.entries.map((item) => {
          return <PaintingItem key={item.name} image={item.image} artist={item.artist} name={item.name} desc={item.desc}></PaintingItem>
        })
      }
    </div>
  )
}

export default PaintingList