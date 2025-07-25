import { NextResponse } from "next/server"

// In-memory storage for the preview environment
// In production, you'd want to use a database
const visitorData = {
  totalVisitors: 10247,
  uniqueVisitors: new Set(),
  lastUpdated: Date.now(),
}

// Generate visitor fingerprint
function generateFingerprint(request) {
  const forwarded = request.headers.get("x-forwarded-for")
  const ip = forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip") || "127.0.0.1"
  const userAgent = request.headers.get("user-agent") || "unknown"

  // Create a simple fingerprint
  return `${ip}-${userAgent.slice(0, 50)}`
}

export async function GET(request) {
  try {
    return NextResponse.json({
      totalVisitors: visitorData.totalVisitors,
      lastUpdated: visitorData.lastUpdated,
    })
  } catch (error) {
    console.error("Error in GET /api/visitors:", error)
    return NextResponse.json({
      totalVisitors: 10247,
      lastUpdated: Date.now(),
    })
  }
}

export async function POST(request) {
  try {
    const fingerprint = generateFingerprint(request)

    // Check if this is a new unique visitor
    if (!visitorData.uniqueVisitors.has(fingerprint)) {
      visitorData.uniqueVisitors.add(fingerprint)
      visitorData.totalVisitors += 1
      visitorData.lastUpdated = Date.now()

      console.log(`New visitor! Total: ${visitorData.totalVisitors}`)

      return NextResponse.json({
        totalVisitors: visitorData.totalVisitors,
        isNewVisitor: true,
        lastUpdated: visitorData.lastUpdated,
      })
    }

    return NextResponse.json({
      totalVisitors: visitorData.totalVisitors,
      isNewVisitor: false,
      lastUpdated: visitorData.lastUpdated,
    })
  } catch (error) {
    console.error("Error in POST /api/visitors:", error)
    return NextResponse.json({
      totalVisitors: visitorData.totalVisitors,
      isNewVisitor: false,
      lastUpdated: visitorData.lastUpdated,
    })
  }
}
