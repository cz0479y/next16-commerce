import BackButton from '@/components/ui/BackButton';

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
}

export default async function ProductLayout({ children }: LayoutProps<'/product/[id]'>) {
  return (
    <div className="flex flex-col gap-6">
      <BackButton />
      {children}
    </div>
  );
}
