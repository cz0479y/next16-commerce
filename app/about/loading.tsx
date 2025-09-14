export default function Loading() {export default function Loading() {

  return (  return (

    <div className="mx-auto max-w-4xl space-y-12">    <div className="mx-auto max-w-4xl space-y-12">

      {/* Header section */}      <div className="space-y-4 text-center">

      <div className="space-y-4 text-center">        <div className="skeleton-animation mx-auto h-8 w-40 rounded" />

        <div className="skeleton-animation mx-auto h-8 w-40 rounded" />        <div className="skeleton-animation mx-auto h-6 w-72 rounded" />

        <div className="skeleton-animation mx-auto h-6 w-72 rounded" />      </div>

      </div>      <div className="text-center">

      {/* Button section */}        <div className="skeleton-animation mx-auto h-10 w-32 rounded" />

      <div className="text-center">      </div>

        <div className="skeleton-animation mx-auto h-10 w-32 rounded" />      <div className="grid gap-8 md:grid-cols-2">

      </div>        {[...Array(4)].map((_, i) => {

      {/* Cards grid */}          return (

      <div className="grid gap-8 md:grid-cols-2">            <div key={i} className="space-y-3 rounded-lg border p-6">

        {[...Array(4)].map((_, i) => (              <div className="skeleton-animation h-6 w-32 rounded" />

          <div key={i} className="skeleton-animation h-32 rounded-lg" />              <div className="skeleton-animation h-4 w-full rounded" />

        ))}              <div className="skeleton-animation h-4 w-full rounded" />

      </div>              <div className="skeleton-animation h-4 w-3/4 rounded" />

    </div>            </div>

  );          );

}        })}
      </div>
    </div>
  );
}
