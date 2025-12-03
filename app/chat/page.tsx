import Default from "../templates/Default";
import FormChat from "../components/forms/FormChat";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import { getFilesByUser } from "@/app/lib/actions/file";
import Files from "@/app/components/Files";
import Link from "next/link";

export default async function Home() {
  const session = (await getServerSession(authOptions)) ?? null;

  // Get files
  let files: any = [];
  if (session) {
    const resFiles = await getFilesByUser(session.user.id);
    files = resFiles?.success ? resFiles.payload : [];
  }
  return (
    <>
      <Default className="items-center justify-center flex flex-col gap-6">
        <div className="flex flex-col gap-6 w-[35.5rem]">
          <h1 className="self-center text-center text-4xl font-bold tracking-wide">
            Hello Guest!
          </h1>

          <p className="text-center">
            Welcome to Study Buddy! Create your free account and upload your
            notes to get instant AI-Powered study help.
          </p>
        </div>

        {session && session.user && files.length > 0 && <Files files={files} />}

        <FormChat />
      </Default>
    </>
  );
}
