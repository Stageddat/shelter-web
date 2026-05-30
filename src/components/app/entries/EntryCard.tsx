import Link from "next/link";
import { DecryptedEntry, deleteEntry } from "@/services/app/entry.service";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useEntries } from "@/contexts/EntriesContext";
import {useState} from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function EntryCard({ entry }: { entry: DecryptedEntry }) {
  const { refreshEntries } = useEntries();
  const [showDialog, setShowDialog]=useState(false)



  function handleConfirmDelete(id: string) {

      deleteEntry(id);
      refreshEntries();
  }

  return (
      <>
        <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>are you sure you want to delete &quot;{entry.title}&quot;?</AlertDialogTitle>
              <AlertDialogDescription>
                this entry will be lost forever! (a long time!)
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>cancel</AlertDialogCancel>
              <AlertDialogAction onClick={()=>handleConfirmDelete(entry.id)}>delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Link
            href={`/app/entries/${entry.id}`}
            className="hover:bg-accent border-border group flex items-center rounded-xl border p-4 transition-all"
        >
          <div className="flex-1">
            <p className="text-xl">{entry.title}</p>
            <p className="text-muted-foreground mt-1 text-base">
              {entry.date} · {entry.time}
            </p>
          </div>

          <Button
              variant="ghost"
              className="hover:text-destructive hover:bg-destructive/20 mr-2 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full p-0! group-hover:flex"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
               setShowDialog(true);
              }}
          >
            <Trash className="h-6! w-6! stroke-2" />
          </Button>
        </Link>
      </>

  );
}
