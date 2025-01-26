'use client';
import CodeBlock from '@/componnents/CodeBlock';

export default function Home() {
  return (
    <div className="p-5">
      <div>
        landing page

        <div className="m-6 min-h-screen items-center">un paragraph</div>

        <div className="m-auto rounded-lg max-w-[50%] max-h-96 overflow-auto bg-gray-900 p-4">
          <CodeBlock language="javascript">
            {`

dans mon application LMS next js 15 utilisant types script et tailwind et daisyUi

je veux créer un tuto.
écris les scripts de :

@/utils/tuto/tutoService.ts
@/app/author/tuto/pages.tsx
@/app/author/tuto/[id]/pages.tsx
@/app/api/tuto/route.ts
@/app/api/tuto/[id]/route.ts
@/components/tuto/TutoForm.tsx
@/components/tuto/TutoList.tsx

            `}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}