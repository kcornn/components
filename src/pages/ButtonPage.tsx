import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  DocsPage,
} from "../components";
// MUI Icons
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ButtonPage() {
  return (
    <DocsPage title="Button">
      <Card variant="default" padding="lg">
        <CardHeader>
          <CardTitle as="h3">Variants</CardTitle>
          <CardDescription>
            Choose from primary, secondary, or tertiary styles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>

          <div className="mb-6">
            <CardTitle as="h4" className="text-slate-700 mb-4">
              Sizes
            </CardTitle>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="sm" variant="primary">
                Small
              </Button>
              <Button size="md" variant="primary">
                Medium
              </Button>
              <Button size="lg" variant="primary">
                Large
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <CardTitle as="h4" className="text-slate-700 mb-4">
              Icon Buttons
            </CardTitle>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" leftIcon={<AddIcon />}>
                Add Item
              </Button>
              <Button variant="secondary" leftIcon={<EditIcon />}>
                Edit
              </Button>
              <Button variant="tertiary" leftIcon={<DeleteIcon />}>
                Delete
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <CardTitle as="h4" className="text-slate-700 mb-4">
              Right Icons
            </CardTitle>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" rightIcon={<ArrowForwardIcon />}>
                Next
              </Button>
              <Button variant="secondary" rightIcon={<DownloadIcon />}>
                Download
              </Button>
              <Button variant="tertiary" rightIcon={<CheckIcon />}>
                Confirm
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <CardTitle as="h4" className="text-slate-700 mb-4">
              Icon Only
            </CardTitle>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" aria-label="Add">
                <AddIcon />
              </Button>
              <Button variant="secondary" aria-label="Delete">
                <DeleteIcon />
              </Button>
              <Button variant="tertiary" aria-label="Favorite">
                <FavoriteIcon />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </DocsPage>
  );
}
