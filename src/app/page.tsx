import { Calendar, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            <h1 className="text-xl font-semibold">Calendar Messaging</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Text variant="h2" className="mb-2">
              Smart Calendar Notifications
            </Text>
            <Text variant="lead">
              Never miss an important event with Apple Shortcuts integration
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Calendar Sync
                </CardTitle>
                <CardDescription>
                  Connect your iPhone calendar via Apple Shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Setup Calendar</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Smart Notifications
                </CardTitle>
                <CardDescription>
                  Persistent reminders until you acknowledge events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Configure Alerts</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Settings
                </CardTitle>
                <CardDescription>
                  Customize notification times and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Open Settings</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>
                  Your upcoming calendar events and notification status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  No events configured yet. Set up your calendar connection to get started.
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Typography Showcase</CardTitle>
                <CardDescription>
                  Examples of the Text component variants
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Text variant="h4">Headers</Text>
                  <Text variant="h5" className="mt-2">Meeting Tomorrow</Text>
                  <Text variant="h6" className="mt-1 text-muted-foreground">Project Review</Text>
                </div>
                
                <div>
                  <Text variant="medium" weight="semibold">Body Text</Text>
                  <Text variant="medium" className="mt-1">
                    This is regular medium text for body content.
                  </Text>
                  <Text variant="small" className="mt-1 text-muted-foreground">
                    Small muted text for additional details.
                  </Text>
                  <Text variant="small_bold" className="mt-1 text-primary">
                    Small bold text in primary color.
                  </Text>
                </div>

                <div>
                  <Text variant="xs" className="text-muted-foreground">Status indicators:</Text>
                  <div className="flex gap-2 mt-1">
                    <Text variant="xs_bold" className="text-green-600 dark:text-green-400">✓ Acknowledged</Text>
                    <Text variant="xs_bold" className="text-yellow-600 dark:text-yellow-400">⏰ Pending</Text>
                    <Text variant="xs_bold" className="text-destructive">✗ Missed</Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
