import Image from 'next/image';

export default function ClusterMapTab() {
  return (
      <div className="p-8 rounded-lg">
        <Image
          src="/Aboutus/cluster-map.jpg"
          alt="Cluster Map of Andhra Pradesh Handicrafts"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
  );
}